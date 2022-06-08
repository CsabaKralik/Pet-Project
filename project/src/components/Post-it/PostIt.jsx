import "./PostIt.css";

const PostIt = (title, tasks) => {
  return (
    <div id="post-it">
      <h1 className="title">{title}</h1>
      {tasks.map((task) => {
        return <h4>{task.text}</h4>;
      })}
    </div>
  );
};

export default PostIt;
