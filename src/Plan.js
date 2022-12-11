function Plan(props) {
  //   handleDelete = (i) => {
  //     this.props.shift(i);
  //   };
  return (
    <div className="row-5">
      <span className="col-2">
        {props.value}
        <button type="button">X</button>
      </span>
    </div>
  );
}

export default Plan;
