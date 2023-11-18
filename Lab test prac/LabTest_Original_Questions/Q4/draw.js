/* 
  DO NOT MODIFY THIS FILE 
*/
function display(chart, data, title) {
  const x = "author"
  const y = "sales"
  
  // Set the dimensions and margins for the chart
  const width = 400;
  const height = 300;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  
  // Create the SVG container
  const svg = d3.select(chart)
    .attr("width", width)
    .attr("height", height);
  
  // Calculate the width of each bar
  const barWidth = (width - margin.left - margin.right) / data.length;
  
  // Create the scales
  const xScale = d3.scaleBand()
    .domain(data.map(d => `${d[x]}-${d[y]}`))
    .range([margin.left, width - margin.right])
    .padding(0.1);
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[y])])
    .range([height - margin.bottom, margin.top]);

  // Draw the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(`${d[x]}-${d[y]}`))
    .attr("y", d => yScale(d[y]))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - margin.bottom - yScale(d[y]));
  
  // Add axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  
  svg.append("g")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(xAxis);
  
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(yAxis);

  // Add title
  svg.append('text')
    .attr('class', 'title')
    .attr('x', width / 2 )
    .attr('y', 18)
    .attr('text-anchor', 'middle')
    .text(title);


}
