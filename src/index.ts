import '@isRostCompany/react-hook-form-dependency';
debugger;
import { useFormContext } from 'react-hook-form';

// @ts-ignore
console.log('should be equal', window.fromReactHookFormDependency === useFormContext);