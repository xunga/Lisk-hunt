import React from 'react';

const HighlightDetailsMobile = (props) => {

  let resource = props.resource;
  return(
    <div>
      <div className="columns is-hidden-desktop has-text-centered is-mobile">
        <div className="column is-10 is-offset-1 is-half-mobile has-text-centered bottom20 top20">
          <a
            className="title"
            href={resource.app_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {resource.app_name} <br className="" />
          </a>
          <a
            href={resource.app_link}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-website button is-small is-outlined top20"
          >
            <i className="fa fa-external-link" aria-hidden="true" />
            Visit website{' '}
          </a>
        </div>
      </div>

      <div className="container has-text-centered is-marginless is-hidden-desktop">
        <div className="columns is-mobile ">
          <div className="column is-half-mobile has-text-centered">
            <p className="heading">Views</p>
            <p className="title">
              {props.views}
            </p>
          </div>
          <div className="column is-half-mobile has-text-centered">
            <p className="heading">Category</p>
            <span
              className={
                'category-label ' + props.labelClassName(resource.category)
              }
            >
                <p className="">
                  #{resource.category}
                </p>
              </span>
          </div>
        </div>
        <div className="columns is-mobile top20 is-hidden-desktop">
          <div className="column is-half-mobile has-text-centered">
            <p className="heading">Author</p>
            <a
              href={resource.author_link}
              target="_blank"
              className="title is-4 has-text-primary"
              rel="noopener noreferrer"
            >
              @{resource.author}
            </a>
          </div>
          <div className="column is-half-mobile has-text-centered">
            <p className="heading">Likes</p>
            <p className="title">
              <a onClick={props.addUpVote}>
                {props.votes}
                {props.displayCaret()}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightDetailsMobile;
