
    
const data = [12,44,23,55,23,53,12,12,44,52,62,88]
const data2 = [2,3,4,5,1 ]

const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / data2.length);

const svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height',svgHeight);

const yScale = d3.scaleLinear()
.domain([0, d3.max(data2)])
.range([0, svgHeight])

const barChart = svg.selectAll('rect')
    .data(data2)
    .enter()
    .append('rect')
    .attr('y', d => { return svgHeight - yScale})
    .attr('height', d => { return d})
    .attr('width', barWidth - barPadding)
    .attr('transform', (d,i) => {
        const translate = [barWidth * i, 0];
        return `translate(${translate})`;
    })

const text = svg.selectAll('text')
    .data(data2)
    .enter()
    .append('text')
    .text(d => { return d })
    .attr('y', (d, i) => { return svgHeight -yScale -2 })
    .attr('x', (d, i) => { return barWidth * i })
    .attr('fill','#A64c38')