

d3.selectAll('li')
    .data([2,5,6,12,123,5,33])
        .style('font-size', d => { return `${d}px`});

d3.select('#box')
    .on('mouseover', () => {
        console.log('mouseover')
        d3.select('#box')
            .transition()
            .duration(500)
            .style('background-color','black')
            .style('height','4px')
    })
    .on('mouseout', () => {
        d3.select('#box')
            .transition()
            .duration(500)
            .style('background-color','white')
            .style('height','100px')
    })
    
const data = [12,44,23,55,23,53,12,12,44,52,62,88]

d3.select('#chart')
    .selectAll('div')
    .data(data)
        .enter()
        .append('div')
        .style('width', d => { return d + 'px'})
        .text(d => { return d })


