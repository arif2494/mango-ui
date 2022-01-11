import { ResponsiveLine } from '@nivo/line';
import React from 'react';

function DefaultLineChart() {
  const data = [
    {
      id: 'japan',
      color: 'hsl(117, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 176
        },
        {
          x: 'helicopter',
          y: 281
        },
        {
          x: 'boat',
          y: 173
        },
        {
          x: 'train',
          y: 248
        },
        {
          x: 'subway',
          y: 149
        },
        {
          x: 'bus',
          y: 235
        },
        {
          x: 'car',
          y: 2
        },
        {
          x: 'moto',
          y: 75
        },
        {
          x: 'bicycle',
          y: 258
        },
        {
          x: 'horse',
          y: 28
        },
        {
          x: 'skateboard',
          y: 161
        },
        {
          x: 'others',
          y: 157
        }
      ]
    },
    {
      id: 'france',
      color: 'hsl(222, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 240
        },
        {
          x: 'helicopter',
          y: 28
        },
        {
          x: 'boat',
          y: 292
        },
        {
          x: 'train',
          y: 186
        },
        {
          x: 'subway',
          y: 252
        },
        {
          x: 'bus',
          y: 11
        },
        {
          x: 'car',
          y: 55
        },
        {
          x: 'moto',
          y: 62
        },
        {
          x: 'bicycle',
          y: 235
        },
        {
          x: 'horse',
          y: 60
        },
        {
          x: 'skateboard',
          y: 37
        },
        {
          x: 'others',
          y: 221
        }
      ]
    },
    {
      id: 'us',
      color: 'hsl(272, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 164
        },
        {
          x: 'helicopter',
          y: 18
        },
        {
          x: 'boat',
          y: 281
        },
        {
          x: 'train',
          y: 7
        },
        {
          x: 'subway',
          y: 103
        },
        {
          x: 'bus',
          y: 186
        },
        {
          x: 'car',
          y: 156
        },
        {
          x: 'moto',
          y: 49
        },
        {
          x: 'bicycle',
          y: 101
        },
        {
          x: 'horse',
          y: 258
        },
        {
          x: 'skateboard',
          y: 185
        },
        {
          x: 'others',
          y: 3
        }
      ]
    },
    {
      id: 'germany',
      color: 'hsl(293, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 10
        },
        {
          x: 'helicopter',
          y: 214
        },
        {
          x: 'boat',
          y: 131
        },
        {
          x: 'train',
          y: 145
        },
        {
          x: 'subway',
          y: 205
        },
        {
          x: 'bus',
          y: 100
        },
        {
          x: 'car',
          y: 106
        },
        {
          x: 'moto',
          y: 93
        },
        {
          x: 'bicycle',
          y: 207
        },
        {
          x: 'horse',
          y: 175
        },
        {
          x: 'skateboard',
          y: 141
        },
        {
          x: 'others',
          y: 253
        }
      ]
    },
    {
      id: 'norway',
      color: 'hsl(160, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 255
        },
        {
          x: 'helicopter',
          y: 209
        },
        {
          x: 'boat',
          y: 190
        },
        {
          x: 'train',
          y: 219
        },
        {
          x: 'subway',
          y: 275
        },
        {
          x: 'bus',
          y: 260
        },
        {
          x: 'car',
          y: 75
        },
        {
          x: 'moto',
          y: 69
        },
        {
          x: 'bicycle',
          y: 38
        },
        {
          x: 'horse',
          y: 97
        },
        {
          x: 'skateboard',
          y: 204
        },
        {
          x: 'others',
          y: 114
        }
      ]
    }
  ];
  return (
    <ResponsiveLine
      data={data}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
      }}
      xScale={{
        type: 'point'
      }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{
        theme: 'background'
      }}
      pointBorderWidth={2}
      pointBorderColor={{
        from: 'serieColor'
      }}
      pointLabelYOffset={-12}
      useMesh
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}

export default DefaultLineChart;
