import "../count.component/count.component.css";
/**
 *
 * @param {object} props
 * @param {string} props.count
 * @returns
 */
function Count(props) {
  return <div className="Count">{props.count}</div>;
}

export default Count;
