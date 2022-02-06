import About from './About'
import Viewer from './Viewer'

const Body = ({state}) => {
  const states = [
    <About />
    <Viewer state={state}>
  ];

  return (
    <div className="Body">
      { states[states != 0] }
    </div>
  );
}
