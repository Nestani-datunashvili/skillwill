async function makeToys(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("უდეფექტო");
      } else {
        resolve("დეფექტური");
      }
    }, delay);
  });
}

async function sellToys(status, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "უდეფექტო") {
        if (Math.random() > 0.7) {
          resolve("გაიყიდა");
        } else {
          resolve("ვერ გაიყიდა");
        }
      } else {
        reject("სტატუსი არ არის 'უდეფექტო'");
      }
    }, delay);
  });
}

async function deliverToys(sellStatus, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sellStatus === "გაიყიდა") {
        if (Math.random() > 0.5) {
          resolve("სურს მიწოდება");
        } else {
          resolve("არ სურს მიწოდება");
        }
      } else {
        reject("სტატუსი არ არის 'გაყიდული'");
      }
    }, delay);
  });
}

const handlePromises = async () => {
  try {
    const status = await makeToys(2000);
    console.log(`Toy status: ${status}`);

    const result = await sellToys(status, 1000);
    console.log(`Sell status: ${result}`);

    const delivery = await deliverToys(result, 2000);
    console.log(`Delivery status: ${delivery}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

handlePromises();
