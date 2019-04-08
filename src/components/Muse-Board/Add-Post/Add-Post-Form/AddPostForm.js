import React from "react";

function AddPostForm(props) {
  return (
    <footer className="Footer">
      <form className="AddPostForm">
        Title:{" "}
        <input
          onChange={props.handleChange}
          name="title"
          placeholder="**required**"
        />
        Image:{" "}
        <input
          onChange={props.handleChange}
          name="image"
          placeholder="**required**"
        />
        Ext Link: <input onChange={props.handleChange} name="link" />
        Caption: <input onChange={props.handleChange} name="comment" />
        <button
          className="AddPostBtn"
          onClick={() => {
            if (props.title.length !== 0 && props.image.length !== 0) {
              props.addPost({
                title: props.title,
                image: props.image,
                link: props.link,
                comment: props.comment,
                likes: 0
              });
              props.toggle();
            } else {
              props.toggle();
            }
          }}
        >
          +
        </button>
        <button className="Minimize-btn" onClick={() => props.toggle()}>
          {" "}
          -{" "}
        </button>
      </form>
    </footer>
  );
}

export default AddPostForm;
