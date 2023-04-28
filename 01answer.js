d3.csv('ue_industry.csv', data => {
        
    console.log(data);
        
    const xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.index))
        .range([1150, 50]);
            
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.Agriculture))
        .range([550, 50]);
        
    const line = d3.line()
        .x(d => xScale(+d.index))
        .y(d => yScale(+d.Agriculture));

    d3.select('#answer1')
        .append('path')
            .attr('d', line(data))
            .attr('stroke', '#202cd4');

        }); 
