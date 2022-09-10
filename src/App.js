import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'
import './grid.css'
import './style.css'
// import styles from './styles/DefaultLayout.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles)

function App() {
  return (
    <div className="grid wide boder">
      <div className="row">
        <ColumnLeft/>
        <ColumnRight/>
      </div>
    </div>
  );
}

export default App;
