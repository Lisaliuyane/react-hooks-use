import { useState } from "react";

export default  function useInput({
 initValue = '',
 helperText = '',
 validator =(value:boolean) =>value,
 validateTriggers =['onChange']
}={}){
    // 保存用户输入的值，使用initValue作为初始值
    const [ value,setValue] =useState(initValue);
    // Boolean类型，表示当前表单项的验证状态
    const [error,setError] =useState(false);

    function onChange(e:any){
        const { value }=e.target;
        setValue(value);
        //根据validateTriggers的选项，决定是否要在oncahge里进行校验
        if(validateTriggers.includes('onChange')){
            setError(!validator(value))
        }
    }

    // 根据validateTriggers 生成相应的事件处理器

    function createEventHandlers(){
        const eventHandlers:any={};
        validateTriggers.forEach((item)=>{
            // 生成相应的事件处理器，并在其中做输入校验
            eventHandlers[item] =(e:any)=>{
                const { value }=e.target;
                setError(!validator(value))
            }
        })
        return eventHandlers;
    }

    const eventHandlers = createEventHandlers();
    return {
        value,
        helperText,
        error,
        ...eventHandlers,
        onChange
    }

}