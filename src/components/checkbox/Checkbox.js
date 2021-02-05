import styles from "./Checkbox.module.scss"

const Checkbox = ({checkState,setCheckState,disabled,checked}) => {

    const checkWrapFunc = () => {
        if(checkState === false){
            return styles.uncheckWrap
        }else{
            return styles.checkWrap
        }
    }

    return(
        <div 
        className={`${styles.wrap} 
        ${ disabled ? setCheckState(null) : checkWrapFunc()} 
        ${checked === true ? setCheckState(true) : setCheckState(true)}`}
        onClick={() => setCheckState(!checkState)}>

        <img src="./assets/check-mark-line.svg" alt="" 
        className={` ${checkState === true ? styles.checked : styles.unchecked}`}/>
        </div>
    )
}
export default Checkbox