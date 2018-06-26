

d3.selectAll('li')
    .data([2,5,6,12,123,5,33])
        .style('font-size', d => { return `${d}px`});

d3.select('#box')
    .on('mouseout', () => {
        console.log('mouseover')
        d3.select('#box')
            .transition()
            .duration(500)
            .style('background-color','black')
            .style('height','4px')
    })
    .on('mouseover', () => {
        d3.select('#box')
            .transition()
            .duration(500)
            .style('background-color','white')
            .style('height','100px')
    })
    


