(this.webpackJsonpshowfinder=this.webpackJsonpshowfinder||[]).push([[0],{26:function(e,t,a){e.exports=a(38)},31:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(31),a(11)),c=a(15),s=a(16),u=a(24),m=a(18),v=a(25),p=a(39),d=a(40),h=a(41),g=a(20),f=function(){return r.a.createElement(p.a,{fluid:!0,style:{backgroundColor:"#FED766",backgroundSize:"auto 100%",marginBottom:"0px"}},r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement("h1",{style:{}},"Search for movies"),r.a.createElement("p",{style:{fontSize:"1.1rem",fontWeight:"bold"}},"this app uses movie db api. You can enter a movie title and find the sequels,prequels and other related to the movie stuff. Press the 'details' button on the movie card to view users score of the movie and a short overview.")))))},E=a(44),b=a(42),y=a(21),x=a(43),w=function(e){return r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(E.a,{onSubmit:e.handleSubmit},r.a.createElement(b.a,{className:"mb-3"},r.a.createElement(y.a,{className:"input",style:{borderRadius:"2px",marginTop:"15px",backgroundColor:"#696773",color:"#EFF1F3",border:"none"},onChange:e.handleChange,placeholder:"Movie title","aria-label":"Movie title","aria-describedby":"basic-addon2"}),r.a.createElement(b.a.Append,null,r.a.createElement(x.a,{style:{borderRadius:"2px",marginTop:"15px"},onClick:e.handleSubmit,variant:"primary"},"Search")))))))},M=a(45),P=function(e){return r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(M.a,{bg:"dark",style:{minWidth:"12rem",maxWidth:"16rem",margin:"20px 0",border:"none",borderRadius:"2px"}},null==e.image?r.a.createElement(M.a.Img,{style:{height:"300px"},variant:"top",src:"https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg"}):r.a.createElement(M.a.Img,{style:{height:"300px"},variant:"top",src:"https://image.tmdb.org/t/p/w500".concat(e.image)}),r.a.createElement(M.a.Body,null,r.a.createElement(x.a,{style:{borderRadius:"2px",fontSize:"1.2rem"},onClick:function(){return e.viewMovieInfo(e.movieId)},variant:"warning",block:!0},"Details"))))))},S=function(e){return r.a.createElement(d.a,{fluid:!0},r.a.createElement(h.a,{bsPrefix:!0,className:"d-flex justify-content-center",style:{flexWrap:"wrap"}},e.movies.map((function(t,a){return r.a.createElement(g.a,{lg:"auto",md:"auto",sm:"auto"},r.a.createElement(P,{key:a,viewMovieInfo:e.viewMovieInfo,movieId:t.id,image:t.poster_path}))}))))},k=a(46),C=function(e){for(var t=[],a=function(a){var n=e.currentPage===a?"active":"";t.push(r.a.createElement(k.a.Item,{style:{padding:"2px"},key:a,active:n,onClick:function(){return e.nextPage(a)}},a))},n=1;n<=e.pages+1;n++)a(n);return r.a.createElement(d.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(k.a,{bsPrefix:!0,style:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start"}},e.currentPage>1?r.a.createElement(k.a.Prev,{style:{padding:"2px"},onClick:function(){return e.nextPage(e.currentPage-1)}}):"",t,e.currentPage<e.pages+1?r.a.createElement(k.a.Next,{style:{padding:"2px"},onClick:function(){return e.nextPage(e.currentPage+1)}}):"")))},I=function(e){return r.a.createElement("div",{style:{minHeight:"100vh"}},r.a.createElement(d.a,null,r.a.createElement(x.a,{variant:"warning",onClick:e.closeMovieInfo,style:{cursor:"pointer",margin:"100px 0 20px 0",borderRadius:"2px"}},r.a.createElement("i",{className:"fas fa-arrow-left"})),r.a.createElement(h.a,{style:{alignItems:"center"}},r.a.createElement(g.a,{md:"auto"},null===e.currentMovie.poster_path?r.a.createElement("img",{style:{width:"300px",borderRadius:"2px"},src:"https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg",alt:"Poster"}):r.a.createElement("img",{style:{borderRadius:"2px"},src:"https://image.tmdb.org/t/p/w300".concat(e.currentMovie.poster_path),alt:"Poster"})),r.a.createElement(g.a,null,r.a.createElement("div",{style:{color:"#EFF1F3"}},r.a.createElement("h1",null,e.currentMovie.title," ",r.a.createElement("span",{style:{fontSize:"1.8rem",color:"#a6a3a0"}},"(",e.currentMovie.release_date.substring(5).split("-").concat(e.currentMovie.release_date.substring(0,4)).join("."),")")),r.a.createElement("p",{style:{fontSize:"1.4rem"}},"User score: ",10*e.currentMovie.vote_average,"%"),r.a.createElement("p",{style:{fontSize:"1.6rem",fontWeight:"bold"}},"Overview"),r.a.createElement("p",{style:{fontSize:"1.2rem"}},e.currentMovie.overview))))))},j=a(23),R=a.n(j),_=(a(36),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=4ff20e7eb5704c2ca993d78a309ca81c&query=".concat(e.state.searchQuery)).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({movies:Object(i.a)(t.results),totalResults:t.total_results})}))},e.ChangePage=function(t){fetch("https://api.themoviedb.org/3/search/movie?api_key=4ff20e7eb5704c2ca993d78a309ca81c&append_to_response=tv&query=".concat(e.state.searchQuery,"&page=").concat(t)).then((function(e){return e.json()})).then((function(a){console.log(a),e.setState({movies:Object(i.a)(a.results),currentPage:t})}))},e.handleChange=function(t){e.setState({searchQuery:t.target.value})},e.viewMovieInfo=function(t){var a=e.state.movies.filter((function(e){return e.id===t})),n=a.length>0?a[0]:null;e.setState({currentMovie:n})},e.closeMovieInfo=function(){e.setState({currentMovie:null})},e.state={movies:[],searchQuery:"",totalResults:0,currentPage:1,currentMovie:null},e}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Math.floor(this.state.totalResults/20);return r.a.createElement("div",null,r.a.createElement("div",null,null===this.state.currentMovie?r.a.createElement(f,null):""),r.a.createElement("div",{className:"App"},null===this.state.currentMovie?r.a.createElement("div",{className:"content"},r.a.createElement(w,{handleSubmit:this.handleSubmit,handleChange:this.handleChange}),r.a.createElement(S,{movies:this.state.movies,viewMovieInfo:this.viewMovieInfo})):r.a.createElement(I,{closeMovieInfo:this.closeMovieInfo,currentMovie:this.state.currentMovie}),r.a.createElement("div",null,r.a.createElement(R.a,{images:{0:"https://image.flaticon.com/icons/svg/523/523968.svg",1:"https://image.flaticon.com/icons/svg/2564/2564549.svg",2:"https://image.flaticon.com/icons/svg/412/412785.svg",3:"https://image.flaticon.com/icons/svg/1448/1448807.svg"},how:80,time:80,size:"50px",background:"#696773"})),this.state.totalResults>20&&null===this.state.currentMovie?r.a.createElement(C,{pages:e,nextPage:this.ChangePage,currentPage:this.state.currentPage}):""))}}]),t}(n.Component));a(37);o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d7f95dbe.chunk.js.map