export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password) {
  if (!password || password.length < 8) {
    return { valid: false, message: "Senha deve ter no mínimo 8 caracteres" };
  }
  
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  
  if (!hasLetter) {
    return { valid: false, message: "Senha deve conter pelo menos uma letra" };
  }
  
  if (!hasNumber) {
    return { valid: false, message: "Senha deve conter pelo menos um número" };
  }
  
  return { valid: true, message: "" };
}

export function isValidVehicleYear(year) {
  const currentYear = new Date().getFullYear();
  const yearNum = parseInt(year, 10);
  
  if (isNaN(yearNum)) {
    return { valid: false, message: "Ano deve ser um número válido" };
  }
  
  if (yearNum < 1990) {
    return { valid: false, message: "Ano deve ser maior ou igual a 1990" };
  }
  
  if (yearNum > currentYear + 1) {
    return { valid: false, message: `Ano não pode ser maior que ${currentYear + 1}` };
  }
  
  return { valid: true, message: "" };
}

export function isValidPrice(price) {
  const priceNum = parseFloat(price);
  
  if (isNaN(priceNum)) {
    return { valid: false, message: "Preço deve ser um número válido" };
  }
  
  if (priceNum <= 0) {
    return { valid: false, message: "Preço deve ser maior que zero" };
  }
  
  return { valid: true, message: "" };
}

export function isValidDocument(document) {
  if (!document) {
    return { valid: false, message: "Documento é obrigatório" };
  }
  
  const cleanDoc = document.replace(/\D/g, '');
  
  if (cleanDoc.length !== 11 && cleanDoc.length !== 14) {
    return { valid: false, message: "Documento deve ter 11 (CPF) ou 14 (CNPJ) dígitos" };
  }
  
  return { valid: true, message: "" };
}

export function isValidPhone(phone) {
  if (!phone) {
    return { valid: true, message: "" }; 
  }
  
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    return { valid: false, message: "Telefone deve ter 10 ou 11 dígitos" };
  }
  
  return { valid: true, message: "" };
}
