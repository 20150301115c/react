import React, { Component } from 'react';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                习近平访问中亚两国成果丰硕<br />
                [塔吉克斯坦各界积极评价习近平国事访问成果 增进全天候友谊]<br />
                这篇刷屏的重磅万字长文 登上《新闻联播》<br />
                任正非:未来两年会减产 2021年焕发生机<br />
                [任正非:没想到美打击我们的面如此宽泛 华为百分之百没有后门]<br />
                美媒批“对更多中国产品加税”：大灾难<br />
                [美国大豆积压程度前所未有 中美贸易战是中国高调惹的祸吗？]<br />
                屠呦呦团队:“青蒿素抗药性”等研究获突破<br />

            </div>
        );
    }
}

export default News;