import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
selector: 'graph-comp',
templateUrl: './graph.component.html',
encapsulation: ViewEncapsulation.None,
styleUrls: ['./graph.component.css']
})
export class Graph { 

    ngOnInit() {
        var data = [
            [7.04724001002674, 6.61475269982607],
            [469.966494833577, 0.0564702199413471],
            [730.847237320262, 0.0215223094667359],
            [905.866531022960, 0.0144661295207866],
            [1039.02689299484, 0.00931883809850469],
            [1283.62719582864, 0.00635253741779030],
            [1381.46335692502, 0.00501137608676594],
            [1464.63016304429, 0.00465843115289524],
            [1619.54107684353, 0.00345799854937132],
            [1854.89727558436, 0.00221381244720744],
            [2028.29945846779, 0.00198801193219451],
            [2233.76875950421, 0.00160342968533543],
            [2822.45802872374, 0.000930996827220198],
            [2881.70898444618, 0.000910414017692678],
            [3051.84671932062, 0.000769350625256198],
            [3146.97465501620, 0.000746237104002209],
            [3307.87000755296, 0.000614227804738634],
            [3426.37134507942, 0.000580272568532539],
            [3747.08700528734, 0.000508480886790707],
            [4033.01469573609, 0.000466843569031935],
            [4991.91788941422, 0.000457874894929627]
          ];
          var dataRef = [
            [214, 7.74515302348704],
            [422, 2.06670819007132],
            [637, 0.759514797439999],
            [850, 0.329563765307096],
            [1061, 0.157606621702001],
            [1275, 0.0822319227166973],
            [1489, 0.0453169751352594],
            [1700, 0.0264312842459514],
            [1915, 0.0157315491239002],
            [2125, 0.00959368355537086],
            [2340, 0.00606782606658235],
            [2553, 0.00389261104625838],
            [2766, 0.00254312064642874],
            [2978, 0.00167838881005014],
            [3191, 0.00112123466115219],
            [3403, 0.000770581808809941],
            [3617, 0.000526380530382762],
            [3829, 0.000367672027921608],
            [4043, 0.000256814729469311],
            [4253, 0.000184543483047888],
            [4468, 0.000133148057754045]
          ];
          var dataObserved = [
            [7.05670966406125, 8.08379869461361],
            [7.04724001002674, 6.61475269982607],
            [99.9161371264827, 1.06814273110627],
            [207.535311718150, 0.812451011183475],
            [315.058928891832, 0.0816634920543581],
            [422.681546994057, 0.0668142736288953],
            [530.294695442248, 0.0447310072600225],
            [633.034415573223, 0.0447254215391931],
            [738.467247919771, 0.0264086600480022],
            [846.059065733116, 0.0112534740341184],
            [955.841147567494, 0.00671236131535110],
            [1058.58431120903, 0.00721929021255946],
            [1166.74717785657, 0.00550227034306237],
            [1273.83040829112, 0.00492147702120296],
            [1382.54241921959, 0.00421863529493488],
            [1489.08520980267, 0.00403422173588066],
            [1591.82052989238, 0.00367480205103872],
            [1697.81455880681, 0.00315000980080376],
            [1802.17598110446, 0.00259820969426234],
            [2016.87685568154, 0.00171127008625540],
            [2234.31082545788, 0.00155228893437709],
            [2443.58444043633, 0.00122937147873451],
            [2653.41571281903, 0.00131137382042053],
            [2868.13026578526, 0.00115394389224072],
            [3401.90185470731, 0.000493468684786436],
            [3930.26722770636, 0.000396241941684986],
            [4468.42508385474, 0.000374905054734916],
            [4995.17238950382, 0.000394129240239056]
          ];
          
          
        //   var margin = {top: 20, right: 30, bottom: 60, left: 60},
        //       width = 760 - margin.left - margin.right,
        //       height = 500 - margin.top - margin.bottom;
          
        //   var x = d3.scale.linear()
        //       .domain([1, 5000])
        //       .range([0, width]);
          
        //   var y = d3.scale.log()
        //       .domain([Math.pow(10, -4), Math.pow(10, 1)])
        //       .range([height, 0]);
          
        //   var xAxis = d3.svg.axis()
        //       .scale(x)
        //       .orient("bottom");
          
        //   var yAxis = d3.svg.axis()
        //       .scale(y)
        //       .orient("left")
        //       .ticks(0, "e")
        //       .tickFormat(function (d) {
        //           var log = Math.log(d) / Math.LN10;
        //           return Math.abs(Math.round(log) - log) < 1e-6 ? 10 : '';
        //       });
        //   var yAxisSub = d3.svg.axis()
        //       .scale(y)
        //       .orient('left')
        //       .ticks(0, "e")
        //       .tickFormat(function (d) {
        //         var log = Math.log(d) / Math.LN10;
        //         return Math.abs(Math.round(log) - log) < 1e-6 ? Math.round(log) : '';
        //       });
          
          
        //   var line = d3.svg.line()
        //       .interpolate("monotone")
        //       .x(function(d) { return x(d[0]); })
        //       .y(function(d) { return y(d[1]); });
              
        //   var lineObserved = d3.svg.line()
        //       .x(function(d) { return x(d[0]); })
        //       .y(function(d) { return y(d[1]); });
              
          
        //   var svg = d3.select("div#svg").append("svg")
        //       .datum(data)
        //       .attr("width", width + margin.left + margin.right)
        //       .attr("height", height + margin.top + margin.bottom)
        //     .append("g")
        //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
              
        //   //<!-- focus -->
          
        //   var bisectDate = d3.bisector(function(d) { return d[0]; }).left,
        //       formatValue = d3.format(",.2f"),
        //       formatCurrency = function(d) { return "$" + formatValue(d); };
              
        //   var focus = svg.append("g")
        //     .attr("class", "focus")
        //     .style("display", "none");
          
        //   focus.append("circle")
        //     .attr("r", 4.5);
          
        //   focus.append("text")
        //     .attr("x", 9)
        //     .attr("dy", ".35em");
        //   svg.append("rect")
        //     .attr("class", "overlay")
        //     .attr("width", width)
        //     .attr("height", height)
        //     .on("mouseover", function() { focus.style("display", null); })
        //     .on("mouseout", function() { focus.style("display", "none"); })
        //     .on("mousemove", mousemove);
          
        //   function mousemove() {
        //       var x0 = x.invert(d3.mouse(this)[0]),
        //         y0 = y.invert(d3.mouse(this)[1]),
        //       i = bisectDate(data, x0, 1),
        //         d0 = data[i - 1],
        //         d1 = data[i],
        //         d = x0 - d0[0] > d1[0] - x0 ? d1 : d0;
        //     focus.attr("transform", "translate(" + x(d[0]) + "," + y(d[1]) + ")");
        //     focus.select("text").text(d[1] + ' : ' + d[0]);
        //   }
        //   //<!-- end focus -->
          
        //   //!-- legend -->
        //   //var color = d3.scale.category10();
        //   //var seriesNames = ['abc', 'zxc', 'esd'];
        //   //
        //   //var legend = svg.append("g")
        //   //      .attr("class", "legend")
        //   //    .selectAll("g")
        //   //      .data(seriesNames)
        //   //    .enter().append("g")
        //   //      .attr("transform", function(d, i) { return "translate(" + (width - 120) + "," + (i * 20) + "),scale(2)"; });
        //   //
        //   //  legend.append("line")
        //   //      .style("stroke", function(d, i) { return color(i); })
        //   //      .attr("x2", 20);
        //   //
        //   //  legend.append("text")
        //   //      .attr("dy", ".35em")
        //   //      .attr("x", 26)
        //   //      .text(function(d) { return "name: " + d; });
        //   //<!-- end legend -->
          
        //   //<!-- area -->
        //   var area = d3.svg.area()
        //       .interpolate("basis")
        //       .x(function(d) { return x(d[0]); })
        //       .y0(function(d) { return y(d[1]) + 15;})
        //       .y1(function(d) { return y(d[1]) - 15; });
              
        //   var area2 = d3.svg.area()
        //     .interpolate("basis")
        //     .x(function(d) { return x(d[0]); })
        //     .y0(function(d) { return y(d[1]) + 25;})
        //     .y1(function(d) { return y(d[1]) - 25; });
          
        //   svg.append("path")
        //     .attr("class", "area yellow-area")
        //     .attr("d", area2);
        //   svg.append("path")
        //     .attr("class", "area grean-area")
        //     .attr("d", area);
        //   //<!-- end area -->
          
        //   svg.append("g")
        //       .attr("class", "x axis")
        //       .attr("transform", "translate(0," + height + ")")
        //       .call(xAxis);
          
        //   svg.append("g")
        //       .attr("class", "y axis")
        //       .call(yAxis);
        //   svg.append('g')
        //     .attr("class", "y axis-y-sub")
        //     .attr("transform", "translate(5, -8)")
        //     .style("font-size", "8px")
        //     .call(yAxisSub);
        //   //<!-- ssm line style-->
        //   //svg.append("path")
        //   //    .style("stroke-dasharray", ("6, 3, 3, 3"))
        //   //    .attr("class", "line")
        //   //    .attr("d", line);
        //   //<!-- end -->
          
        //   //<!-- line in areas style-->
        //   svg.append("path")
        //       .style("stroke-dasharray", ("5, 3"))
        //       .attr("class", "line-in-area")
        //       .attr("d", line);
        //   //<!-- end --> 		
          
        //   svg.append("path")
        //           .datum(dataObserved)
        //       .attr("class", "line-in-area")
        //       .attr("d", lineObserved);
          
          
        //   //<!-- SSM text -->
        //   svg.append("svg:image")
        //     .attr('x', 110)
        //     .attr('y', 50)
        //     .attr('width', 45)
        //     .attr('height', 45)
        //     // image file: legedsZprime.png
        //     .attr("xlink:href", "http://svgshare.com/i/3p9.svg");
        //   svg.append("text")
        //     .attr("class", 'ssm-text')
        //     .attr("x", 160)         
        //     .attr("y", 80)         
        //       .text("=0.005");
        //   //<!-- end -->
          
        //   //<!-- ref text -->
        //   svg.append("text")
        //       .attr("class", 'ref-text')
        //       .attr("x", 70)         
        //       .attr("y", 40)         
        //       .text("Reference model");
              
              
        //   //<!-- end -->
          
        //   //<!-- x text -->
        //   svg.append("text")
        //       .attr("class", 'ref-text')
        //       .attr("x", width/2 - 50)         
        //       .attr("y", height + 40)     
        //       .text("Mz(GeV)");  
        //   //<!-- end -->
        //   //<!-- y text -->
        //   svg.append("text")
        //       .attr("class", 'ref-text')
        //       .attr("text-anchor", "middle")
        //         .attr("transform", "translate(-30,200) rotate(270)")    
        //       .text("...(pb)");  
        //   //<!-- end -->
              
        //   //  svg.append("path")
        //   //    .attr("class", "line")
        //   //    .attr("d", line);
          
        //   //<!-- rect for reference line -->
        //   svg.append("path")
        //           .datum(dataRef)
        //       .attr("class", "line-ref")
        //       .attr("d", line);
        //   svg.selectAll(".rectangles")
        //       .data(dataRef)
        //         .enter().append("rect")
        //       .attr("x", line.x())
        //       .attr("y", function(d) { return y(d[1]) - 2; })
        //       .style("fill", "blue")
        //       .attr("width", 5)
        //       .attr("height", 7);
        //   //<!-- end -->
          
        //   //<!-- circle for middle line -->
        //   svg.selectAll(".dot")
        //       .data(dataObserved)
        //     .enter().append("circle")
        //       .attr("class", "dot-middle-line")
        //       .attr("cx", line.x())
        //       .attr("cy", line.y())
        //       .attr("r", 3.5);
        //   //<!-- end -->
          
        //   //<!-- legend image -->
        //   svg.append("svg:image")
        //     .attr('x', 300)
        //     .attr('y', -150)
        //     .attr('width', 400)
        //     .attr('height', 400)
        //     // image file: legedsZprime.png
        //     .attr("xlink:href", "https://cdn1.savepice.ru/uploads/2017/11/9/23a327011c5f481a636de5fefb242ca0-full.png");
        //     //<!-- end -->

        let main: MainGraph = new MainGraph("div#svg");
        main.init(data);

    }
}

class MainGraph {

    public static svg;
    public static x;
    public static y;

    constructor(private selector: string) {

    }

    public init(data) {
        let margin = {top: 20, right: 30, bottom: 60, left: 60},
            width = 760 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;
        MainGraph.x = d3.scale.linear()
            .domain([1, 5000])
            .range([0, width]);
        
        MainGraph.y = d3.scale.log()
            .domain([Math.pow(10, -4), Math.pow(10, 1)])
            .range([height, 0]);
        
        let xAxis = d3.svg.axis()
            .scale(MainGraph.x)
            .orient("bottom");
        
        let yAxis = d3.svg.axis()
            .scale(MainGraph.y)
            .orient("left")
            .ticks(0, "e")
            .tickFormat(function (d) {
                let log = Math.log(d) / Math.LN10;
                return Math.abs(Math.round(log) - log) < 1e-6 ? 10 : '';
            });
        let yAxisSub = d3.svg.axis()
            .scale(MainGraph.y)
            .orient('left')
            .ticks(0, "e")
            .tickFormat(function (d) {
                let log = Math.log(d) / Math.LN10;
                return Math.abs(Math.round(log) - log) < 1e-6 ? Math.round(log) : '';
            });

        MainGraph.svg = d3.select(this.selector).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        MainGraph.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        
        MainGraph.svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        MainGraph.svg.append('g')
            .attr("class", "y axis-y-sub")
            .attr("transform", "translate(5, -8)")
            .style("font-size", "8px")
            .call(yAxisSub);


        new GraphArea({
            data,
            class: 'yellow-area',
            offset: 25
        });
        new GraphArea({
            data,
            class: 'green-area',
            offset: 15
        });
        let lineBase: SSMLine = new SSMLine({
            data,
            interpolate: 'monotone',
            class: 'ssm-line',
            render: true
        });
        new GraphText({
            text: 'Reference model',
            class: 'ref-text',
            x: 70,
            y: 40
        });
        
    }
}

class SSMContainer {

    private lines: SSMLine[];

    constructor(linesConf: any[]) {
        linesConf.forEach((conf, i) => {
            this.lines[i] = new SSMLine({data: conf.data});
        });
    }
    
}

class GraphLine {
    
    protected line;
    protected lienView;

    protected data: any[];

    constructor(lineConfig: any) {
        this.line = d3.svg.line()
            .x(function(d) { return MainGraph.x(d[0]); })
            .y(function(d) { return MainGraph.y(d[1]); });

        if (lineConfig.interpolate) {
            this.line.interpolate(lineConfig.interpolate);
        } else {
            this.line.interpolate("monotone");
        }

        // TODO-ilia remove in css class
        this.lienView = MainGraph.svg.append("path").style("stroke-dasharray", ("7, 4, 4, 4"));
        if (lineConfig.data) {
            this.data = lineConfig.data;
            this.lienView.datum(this.data);
        }
        // css class necessary
        this.lienView.attr("class", lineConfig.class);
        if (lineConfig.render) {
            this.lienView.attr("d", this.line);
        }
    }
}

class GraphArea {
    
    protected area;
    protected areaView;

    constructor(lineConfig: any) {
        this.area = d3.svg.area()
            .interpolate("basis")
            .x(function(d) { return MainGraph.x(d[0]); })
            .y0(function(d) { return MainGraph.y(d[1]) + lineConfig.offset;})
            .y1(function(d) { return MainGraph.y(d[1]) - lineConfig.offset;});

        this.areaView = MainGraph.svg.append("path");
        this.areaView.datum(lineConfig.data);
        this.areaView.attr("class", "area " + lineConfig.class)
            .attr("d", this.area);
    }
}

class GraphText {
    private textSign: {text: string, x, y};
    constructor(textConfig: any) {
        this.textSign = {
            text: textConfig.text,
            x: textConfig.x,
            y: textConfig.y
        };
        MainGraph.svg.append("text")
            .attr("class", textConfig.class)
            .attr("x", this.textSign.x)         
            .attr("y", this.textSign.y)         
            .text(this.textSign.text);
    }
}

class SSMLine extends GraphLine {

    private bisectDate = d3.bisector(function(d) { return d[0]; }).left;
    private formatValueY = d3.format(",.4f");
    private formatValueX = d3.format(",.0f");

    constructor(lineConfig: any) {
        super(lineConfig);
    }

    updateText(x): void {
        let i = this.bisectDate(this.data, x, 1),
            d0 = this.data[i - 1],
            d1 = this.data[i],
            d = x - d0[0] > d1[0] - x ? d1 : d0;
        
    }
}
