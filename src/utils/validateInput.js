export function validateInput(type, value) {
  switch (type) {
    case 'email': {
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (pattern.test(value)) return true;
      return false;
    }

    case 'password': {
      const pattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
      if (pattern.test(value)) return true;
      return false;
    }

    default:
      return false;
  }
}
