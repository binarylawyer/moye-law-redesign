
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Podcast } from '../../data/podcastData';
import { uploadFile } from '../../utils/fileUpload';
import { useToast } from "@/components/ui/use-toast";

interface PodcastUploadProps {
  onPodcastUploaded: (podcast: Podcast) => void;
}

const PodcastUpload: React.FC<PodcastUploadProps> = ({ onPodcastUploaded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState('');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Check if it's an audio file
      if (!files[0].type.startsWith('audio/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an audio file.",
          variant: "destructive"
        });
        return;
      }
      setAudioFile(files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !audioFile) {
      toast({
        title: "Missing information",
        description: "Please fill all required fields and upload an audio file.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    
    try {
      // Upload the audio file
      const audioUrl = await uploadFile(audioFile);
      
      // Create a new podcast object
      const newPodcast: Podcast = {
        id: `new-${Date.now()}`,
        title,
        description,
        audioUrl,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        duration: '00:00', // Duration would need to be calculated from the audio file
        listens: 0,
        topics: topics.split(',').map(topic => topic.trim())
      };
      
      // Pass the new podcast to the parent component
      onPodcastUploaded(newPodcast);
      
      // Reset form
      setTitle('');
      setDescription('');
      setTopics('');
      setAudioFile(null);
      
      toast({
        title: "Podcast uploaded",
        description: "Your podcast has been successfully uploaded.",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your podcast. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="font-serif text-2xl text-navy mb-6">Upload New Podcast</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input 
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter podcast title"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea 
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter podcast description"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="topics">Topics (comma separated)</Label>
          <Input 
            id="topics"
            value={topics}
            onChange={(e) => setTopics(e.target.value)}
            placeholder="Estate Planning, Intellectual Property, etc."
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="audio">Audio File</Label>
          <Input 
            id="audio"
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            required
          />
          {audioFile && (
            <p className="text-sm text-charcoal/60">Selected: {audioFile.name}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="bg-gold hover:bg-gold/90 text-white"
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Podcast'}
        </Button>
      </form>
    </div>
  );
};

export default PodcastUpload;
