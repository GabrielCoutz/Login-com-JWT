interface DataModel {
  [key: string]: string;
}

interface FormModel {
  children: ReactNode;
  onSubmit: React.FormEventHandler;
}

interface InputModel {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  id: string;
  className?: string;
  value?: string;
  required?: boolean;
  autoComplete?: string;
  defaultValue?: string;
}

export interface LabelModel {
  htmlFor: string;
  className?: string;
  children?: string;
}

interface ErroModel {
  message: string;
}

interface createUserResponse {
  userName: string;
  message: string;
}
