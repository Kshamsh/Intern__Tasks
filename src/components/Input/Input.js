import styles from './Input.module.scss'

const Input = ({disabled,id,contentValue,onChange,onPressEnter,defaultValue,placeholder,maxLength}) => {
  
  return (
    <div className={styles.wrapper}>
      <img src="./assets/exclamation-round-line.svg" alt="" className={`${styles.svg} 
      ${ contentValue.length > maxLength ? styles.svgDanger : ""}`}/>
      <input
      // maxLength={maxLength}
      disabled={disabled} 
      key={id} 
      placeholder={placeholder} 
      value={contentValue ? contentValue : defaultValue}
      onKeyPress={onPressEnter}
      onChange={onChange}
      type="text"
      className={`${styles.input} ${contentValue.length > maxLength ? styles.danger : ""}`}/>
    </div>
  );
}

export default Input;
