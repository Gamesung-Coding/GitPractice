export function verifyName(name) {
  if (name.trim() === "") return false;
  if (name.length < 2 || name.length > 50) return false;
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(name);
}
