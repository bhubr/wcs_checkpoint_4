import React from 'react'

function Project(props) {
  return (
    <div class="post">
      <div class="header_post">
        <img src="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
      </div>

      <div class="body_post">
        <div class="post_content">
          <h1>Lorem Ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda cumque deserunt
                    dolorum ex exercitationem.</p>
          <div class="container_infos">
            <div class="postedBy">
              <span>author</span>
                John Doe
              </div>

            <div class="container_tags">
              <span>tags</span>
              <div class="tags">
                <ul>
                  <li>design</li>
                  <li>front end</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project


  // if (this.props.data) {
  //   var projects = this.props.data.projects.map(function (projects) {
  //     var projectImage = 'images/portfolio/' + projects.image;
  //     return <div key={projects.title} className="columns portfolio-item">
  //       <div className="item-wrap">
  //         <a href={projects.url} title={projects.title}>
  //           <img alt={projects.title} src={projectImage} />
  //           <div className="overlay">
  //             <div className="portfolio-item-meta">
  //               <h5>{projects.title}</h5>
  //               <p>{projects.category}</p>
  //             </div>
  //           </div>
  //           <div className="link-icon"><i className="fa fa-link"></i></div>
  //         </a>
  //       </div>
  //     </div>
  //   })
  // }