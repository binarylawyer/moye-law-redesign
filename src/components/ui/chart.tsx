
import * as React from "react"
import { useMemo } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"

export interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: {
    date: string
    value: number
  }[]
  valueFormatter?: (value: number) => string
  labelFormatter?: (label: string) => string
  dataKey?: string
  nameKey?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: "line" | "circle" | "dashed"
}

// Create a wrapper for the tooltip to fix typing issues
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: Record<string, any>;
    value: number;
    name: string;
  }>;
  label?: string;
  labelFormatter?: (label: string) => string;
  labelClassName?: string;
  formatter?: (value: number, name: string) => string;
  nameKey?: string;
  labelKey?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "circle" | "dashed";
}

// Fix the tooltip component type issues by creating a custom tooltip component
const CustomTooltip: React.FC<CustomTooltipProps> = ({ 
  active, 
  payload, 
  label, 
  labelFormatter, 
  labelClassName, 
  formatter, 
  nameKey = "", 
  hideLabel, 
  hideIndicator, 
  indicator = "circle" 
}) => {
  const indicatorVariants = {
    line: "w-4 h-px",
    circle: "w-2 h-2 rounded-full",
    dashed: "w-4 h-px border-dashed border-[1.5px] border-y-0 border-r-0",
  }

  const content = useMemo(() => {
    if (!active || !payload?.length) {
      return null
    }

    const data = payload[0]?.payload as { [key: string]: any } | undefined
    if (!data) {
      return null
    }

    return (
      <div className="flex flex-col gap-1">
        {!hideLabel && label ? (
          <div className={cn("text-xs text-muted-foreground", labelClassName)}>
            {labelFormatter ? labelFormatter(label) : label}
          </div>
        ) : null}
        {Object.keys(data).map((key, i) => {
          if (key === nameKey) {
            return null
          }

          const name = nameKey ? data[nameKey] : key
          const value = data[key]

          return (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center">
                {!hideIndicator ? (
                  <div
                    className={cn(
                      "mr-2 inline-block",
                      indicatorVariants[indicator || "circle"]
                    )}
                  />
                ) : null}
                <div className="text-xs text-muted-foreground">{name}</div>
              </div>
              <div className="font-medium">
                {formatter ? formatter(value, name) : value}
              </div>
            </div>
          )
        })}
      </div>
    )
  }, [active, payload, labelFormatter, nameKey, formatter, label, hideLabel, hideIndicator, indicator, labelClassName])

  if (!active || !payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "z-50 rounded-lg border bg-background p-2 shadow-md outline-none"
      )}
    >
      {content}
    </div>
  )
}
CustomTooltip.displayName = "CustomTooltip"

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      className,
      data,
      valueFormatter,
      labelFormatter,
      dataKey = "value",
      nameKey = "date",
      hideLabel,
      hideIndicator,
      indicator,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("w-full", className)} ref={ref} {...props}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={nameKey}
              axisLine={false}
              tickLine={false}
              tickFormatter={labelFormatter}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={valueFormatter}
            />
            <Tooltip
              content={(props) => (
                <CustomTooltip
                  {...props as CustomTooltipProps}
                  valueFormatter={valueFormatter}
                  labelFormatter={labelFormatter}
                  nameKey={nameKey}
                  labelKey={nameKey}
                  hideLabel={hideLabel}
                  hideIndicator={hideIndicator}
                  indicator={indicator}
                />
              )}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke="#8884d8"
              fillOpacity={0.1}
              fill="url(#totalGradient)"
            />
            <defs>
              <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
)
Chart.displayName = "Chart"
