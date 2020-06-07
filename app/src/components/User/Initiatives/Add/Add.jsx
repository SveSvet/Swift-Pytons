import React, {useState} from "react";
import styles from './Add.module.css';
import Header from "../../../Header";
import YMap from "../../../Map";
import Menu from "../../Menu";


const AddInitiative = (props) => {
  const initialState ={
    point: "Выберите точку"
  };
  const [state, setState] = useState(initialState);
  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
        setLabel{
          label: e.target.value
      }
    };

    const addNewItem = () => {
            return (
                <div className={styles.inicAdd}>
                    Инициатива добавлена!
                </div>
            )
    };


    const onSubmit = (e) => {
        e.preventDefault();
        addNewItem();
        setLabel({
            label: ''
        });
    };


    function select (coords) {
      setState({point: coords[0].toFixed(3)+" "+coords[1].toFixed(3)})
    }
    return (
        <div className={styles.wrapper}>
            <Header child={'Предложить инициативу'}/>
            <Menu/>
            <YMap select={select} selector="true"/>
            <div className={styles.initiatives__wrapper}>
              <div>Координаты: {state.point}</div>
              <form className={styles.wrap__desc} onSubmit={onSubmit}>
                  <label className={styles.desc}>Название: <textarea onLabelChange={onLabelChange()}/></label>
              </form>
              <div className={styles.vote}>Предложить</div>
            </div>

        </div>
    )
};

export default AddInitiative;

