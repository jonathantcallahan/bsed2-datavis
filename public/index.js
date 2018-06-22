

d3.selectAll('li')
    .data([2,5,6,12,123,5,33])
        .style('font-size', d => { return `${d}px`});

d3.select('#box').transition()
    .style('background-color','black')


