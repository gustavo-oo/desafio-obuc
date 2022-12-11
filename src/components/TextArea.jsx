import "../styles/components/TextArea.scss"

import TextareaAutosize from 'react-textarea-autosize';

import InputContainer from "./InputContainer"

const TextField = ({
    label,
    id = label,
    error = false,
    value,
    onChange,
}) => {
    return (
        <InputContainer error={error}>
            <label htmlFor={id}>
                {label}
            </label>
            <div className="text-area-field">
                <TextareaAutosize
                    id={id}
                    value={value}
                    onChange={onChange}
                    minRows={4}
                />
            </div>
        </InputContainer>
    )
}

export default TextField;
