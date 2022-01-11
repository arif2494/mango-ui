import { ResponsiveBar } from '@nivo/bar';
import React from 'react';

function DefaultBarChart() {
  const data = [
    {
      country: 'AD',
      'hot dog': 87,
      'hot dogColor': 'hsl(164, 70%, 50%)',
      burger: 47,
      burgerColor: 'hsl(329, 70%, 50%)',
      sandwich: 15,
      sandwichColor: 'hsl(166, 70%, 50%)',
      kebab: 9,
      kebabColor: 'hsl(192, 70%, 50%)',
      fries: 19,
      friesColor: 'hsl(215, 70%, 50%)',
      donut: 20,
      donutColor: 'hsl(314, 70%, 50%)'
    },
    {
      country: 'AE',
      'hot dog': 69,
      'hot dogColor': 'hsl(324, 70%, 50%)',
      burger: 179,
      burgerColor: 'hsl(349, 70%, 50%)',
      sandwich: 165,
      sandwichColor: 'hsl(46, 70%, 50%)',
      kebab: 1,
      kebabColor: 'hsl(244, 70%, 50%)',
      fries: 44,
      friesColor: 'hsl(242, 70%, 50%)',
      donut: 112,
      donutColor: 'hsl(124, 70%, 50%)'
    },
    {
      country: 'AF',
      'hot dog': 52,
      'hot dogColor': 'hsl(33, 70%, 50%)',
      burger: 148,
      burgerColor: 'hsl(64, 70%, 50%)',
      sandwich: 198,
      sandwichColor: 'hsl(250, 70%, 50%)',
      kebab: 50,
      kebabColor: 'hsl(10, 70%, 50%)',
      fries: 147,
      friesColor: 'hsl(243, 70%, 50%)',
      donut: 194,
      donutColor: 'hsl(53, 70%, 50%)'
    },
    {
      country: 'AG',
      'hot dog': 168,
      'hot dogColor': 'hsl(129, 70%, 50%)',
      burger: 2,
      burgerColor: 'hsl(211, 70%, 50%)',
      sandwich: 189,
      sandwichColor: 'hsl(151, 70%, 50%)',
      kebab: 83,
      kebabColor: 'hsl(76, 70%, 50%)',
      fries: 122,
      friesColor: 'hsl(339, 70%, 50%)',
      donut: 176,
      donutColor: 'hsl(224, 70%, 50%)'
    },
    {
      country: 'AI',
      'hot dog': 160,
      'hot dogColor': 'hsl(27, 70%, 50%)',
      burger: 4,
      burgerColor: 'hsl(135, 70%, 50%)',
      sandwich: 39,
      sandwichColor: 'hsl(173, 70%, 50%)',
      kebab: 79,
      kebabColor: 'hsl(93, 70%, 50%)',
      fries: 191,
      friesColor: 'hsl(199, 70%, 50%)',
      donut: 59,
      donutColor: 'hsl(301, 70%, 50%)'
    },
    {
      country: 'AL',
      'hot dog': 90,
      'hot dogColor': 'hsl(129, 70%, 50%)',
      burger: 158,
      burgerColor: 'hsl(77, 70%, 50%)',
      sandwich: 114,
      sandwichColor: 'hsl(285, 70%, 50%)',
      kebab: 127,
      kebabColor: 'hsl(182, 70%, 50%)',
      fries: 83,
      friesColor: 'hsl(80, 70%, 50%)',
      donut: 155,
      donutColor: 'hsl(257, 70%, 50%)'
    },
    {
      country: 'AM',
      'hot dog': 128,
      'hot dogColor': 'hsl(52, 70%, 50%)',
      burger: 64,
      burgerColor: 'hsl(158, 70%, 50%)',
      sandwich: 127,
      sandwichColor: 'hsl(265, 70%, 50%)',
      kebab: 168,
      kebabColor: 'hsl(36, 70%, 50%)',
      fries: 81,
      friesColor: 'hsl(195, 70%, 50%)',
      donut: 41,
      donutColor: 'hsl(144, 70%, 50%)'
    }
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{
        top: 50,
        right: 130,
        bottom: 50,
        left: 60
      }}
      padding={0.3}
      valueScale={{
        type: 'linear'
      }}
      indexScale={{
        type: 'band',
        round: true
      }}
      colors={{
        scheme: 'nivo'
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'fries'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'sandwich'
          },
          id: 'lines'
        }
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
    />
  );
}

export default DefaultBarChart;
