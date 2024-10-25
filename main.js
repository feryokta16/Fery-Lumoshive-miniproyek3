//object composition pendekatan dalam pengembangan perangkat lunak yang digunakan untuk membangun object compleks dari beberapa object sederhana

// SRP
// setiap kelas hanya boleh memiliki 1 tanggung jawab dimana di sini kelas ui,Db, dan design memiliki tuggas masing masing 1
class UI {
  createUI() {
    return `membangun tampilan antarmuka pengguna`;
  }
}
class DB {
  createDb() {
    return `membangun dan mengelola database`;
  }
}
class Design {
  createDesign() {
    return `membuat desain user interface`;
  }
}

class Developer {
  constructor() {
    this.ui = ui;
    this.db = db;
    this.design = design;
  }
  deployclass() {
    return `melakukan deploy`;
  }

  getInfo() {
    console.log(
      `${this.ui.createUI()} \n` +
        `${this.db.createDb()}\n` +
        `${this.design.createDesign()}\n` +
        `${this.deployclass()}`
    );
  }
}

class Frondend extends Developer {
  constructor() {
    super();
  }
  //OCP
  //kelas harus terbuka untuk diperluan tapi tertutup untuk di modifikasi
  animasi() {
    return "Menambahkan animasi ke halaman";
  }
  //LSP
  //subclass dapat menggantikan superclass tanpa mengubah cara kerja program jadi di kelas induk ada deploy di ganti tanpa harus mengganti kode program
  deployclass() {
    return `melakukan deploy bagian frondend`;
  }
  getInfo() {
    console.log(
      `${this.ui.createUI()} \n` +
        `${this.animasi()}\n` +
        `${this.deployclass()}`
    );
  }
}

class Backend extends Developer {
  constructor() {
    super();
  }
  api() {
    return "Mengelola API backend";
  }
  //ISP
  //kita tidak boleh memaksa antarmuka yang tidak di perlukan
  getInfo() {
    console.log(`${this.db.createDb()} \n` + `${this.api()}\n`);
  }
}

const ui = new UI();
const db = new DB();
const design = new Design();

const frondend = new Frondend();
const developer = new Developer();
const backend = new Backend();

developer.getInfo();
console.log("====================");
frondend.getInfo();
console.log("====================");
backend.getInfo();

//DIP
//  bergantung pada abstraksi, bukan implementasi konkret
class Print {
  constructor(data) {
    this.data = data;
  }
  printData() {
    this.data.getInfo();
  }
}
console.log("\nprintdata");
console.log("=================\n");
const print = new Print(developer);
print.printData();
