import React from "react";

// const Rank = ({ name, entries }) => {
//   return (
//     <div>
//       <div className='white f3'>
//         {`${name}, your current entry count is...`}
//       </div>
//       <div className='white f1'>
//         {entries}
//       </div>
//     </div>
//   );
// }

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      entries: props.entries,
      email: props.email,
    };
  }
  render() {
    const { name, entries } = this.props;
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is... `}
        </div>
        <div className="white f1">{`${entries}`}</div>
      </div>
    );
  }
}

export default Rank;
