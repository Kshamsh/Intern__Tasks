import styles from "./Checkbox.module.scss"

const Checkbox = ({checkState,setCheckState,disabled}) => {

    const checkWrapFunc = () => {
        if(checkState === false){
            return styles.uncheckWrap
        }else{
            return styles.checkWrap
        }
    }

    return(
        <div 
        className={`${styles.wrap} ${ disabled ? setCheckState(null) : checkWrapFunc()}`}
        onClick={() => setCheckState(!checkState)}>
        <img src="./assets/check-mark-line.svg" alt="" className={` ${checkState === true ? styles.checked : styles.unchecked}`}/>
        </div>
    )
}
export default Checkbox