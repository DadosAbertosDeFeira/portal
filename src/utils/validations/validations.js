import regexes from "./regexes";

const validations = new Map();

validations.set("email", {
  pattern: (v) => regexes.get("email").test(v) || "Informe um email válido.",
});

export default validations;
