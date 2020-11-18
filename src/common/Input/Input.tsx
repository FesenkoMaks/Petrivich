import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import classes from './Input.module.scss'

type InputPropsType
    = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { bottomButtonClick: () => void; topButtonClick: () => void; }

const Input = ({topButtonClick, bottomButtonClick, ...props}: InputPropsType) => {

    return (
        <label className={classes.label}>
            <input {...props} type={'text'} className={classes.input}/>
            <div className={classes.counter}>
                <div className={classes.top} onClick={topButtonClick}>

                </div>
                <div className={classes.bottom} onClick={bottomButtonClick}>

                </div>
            </div>
        </label>
    )
}

export default React.memo(Input)
