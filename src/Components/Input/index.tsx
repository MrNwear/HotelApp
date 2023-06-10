import React, {useState} from 'react';
import {TextInput, Text} from 'react-native-paper';
import {Colors} from '../../utils/colors';
import {styles} from './style';

type TextInput = {
  style?: any;
  placeholder: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  icon?: any;
  value?: string | undefined;
  onEndEditing?: any;
  onPressIcon?: () => void;
  focused?: boolean;
  passwordShown?: boolean;
  disabled?: boolean;
  editable?: boolean;
  state?: any;
  type?: any;
  required?: any;
  requiredText?: any;
  defaultValue?: any;
  error?: any;
  valid?: boolean;
  [anyOtherAttribute: string]: any;
};
const TextInputComponent = (props: TextInput) => {
  const {
    editable,
    style,
    placeholder,
    value,
    passwordShown,
    onChangeText,
    icon,
    onPressIcon,
    disabled,
    onEndEditing,
    focused,
    error,
    valid,
    ...rest
  } = props;
  const [border, setBorder] = useState(Colors.white);
  return (
    <>
      <TextInput
        mode="outlined"
        outlineColor={error ? Colors.error:Colors.inactiveInput}
        activeOutlineColor={error ? Colors.error: Colors.activeInput}
        outlineStyle={{borderRadius:10}}
        contextMenuHidden={true}
        editable={editable}
        style={[
          styles.textInput,
        
          style,
          valid && {borderColor: valid ? border : 'red'},
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={passwordShown}
        right={
          icon ? (
            <TextInput.Icon
              icon={icon}
              color={Colors.black}
              onPress={onPressIcon}
            />
          ) : (
            ''
          )
        }
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        placeholderTextColor={Colors.textHint}
        selectionColor={Colors.black}
        disabled={disabled}
        onFocus={() => {
          setBorder('white');
        }}
        // onBlur={() => {
        //     valid && setBorder('red');
        // }}
        onEndEditing={onEndEditing}
        {...rest}
      />
      {!valid ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </>
  );
};
export default TextInputComponent;
