import Shelf from "./shelf";

function BookShelf() {
  const books = [
    {
      id: '1',
      title: 'Dilan: Dia adalah Dilanku Tahun 1990',
      author: 'Pidi Baiq',
      year: 2014,
      desc: 'Dilan: Dia adalah Dilanku tahun 1990 adalah sebuah novel karya Pidi Baiq yang diterbitkan oleh Penerbit Pastel Books (Mizan Group). Novel tersebut menjadi buku dengan penjualan terbaik di Gramedia, serta diadaptasi ke dalam sebuah film yang berjudul Dilan 1990.',
      isRead: true
    },
    {
      id: '2',
      title: 'Dilan Bagian Kedua: Dia adalah Dilanku Tahun 1991',
      author: 'Pidi Baiq',
      year: 2015,
      desc: 'Dilan Bagian Kedua: Dia adalah Dilanku Tahun 1991 adalah novel sekuel dari Dilan: Dia adalah Dilanku Tahun 1990 yang ditulis oleh Pidi Baiq dan terbit tahun 2015. Novel Dilan 2 diterbitkan oleh Penerbit Pastel Books. Novel ini berisi tentang romansa remaja di Kota Bandung tahun 1991.',
      isRead: true
    },
    {
      id: '3',
      title: 'Milea: Suara dari Dilan',
      author: 'Pidi Baiq',
      year: 2016,
      desc: 'Milea, Suara dari Dilan adalah sebuah novel karya Pidi Baiq yang diterbitkan oleh Pastel Books pada tahun 2016. Novel tersebut adalah sekuel dari novel Dilan: Dia adalah Dilanku Tahun 1990 dan Dilan Bagian Kedua: Dia adalah Dilanku Tahun 1991. Seperti halnya dua novel sebelumnya, karya tersebut diadaptasi ke dalam film Milea.',
      isRead: false
    },
    {
      id: '4',
      title: 'Ancika: Dia yang Bersamaku 1995',
      author: 'Pidi Baiq',
      year: 2021,
      desc: 'Ancika: Dia yang Bersamaku di Tahun 1995 adalah sebuah novel Indonesia tahun 2021 karya Pidi Baiq dan diterbitkan oleh Pastelbooks. Novel tersebut merupakan kelanjutan dari seri novel Dilan yang terbit sejak 2014. Seperti novel-novel dalam seri novel Dilan sebelumnya, novel tersebut juga diadaptasi ke dalam film Ancika: Dia yang Bersamaku 1995.',
      isRead: false
    }
  ]

  const trueBooks = books.filter((book) => book.isRead);
  const falseBooks = books.filter((book) => !book.isRead);

  return (
    <div className="m-2 mt-3 mb-3 p-5 bg-white rounded-lg">
      <h3 className="text-xl font-bold">Bookshelf</h3>
      <Shelf books={trueBooks} isRead={true}></Shelf>
      <Shelf books={falseBooks} isRead={false}></Shelf>
      <input type="button" className="bg-red-600 text-white hover:bg-red-800 border border-rounded w-full p-1 pl-4 pr-4 text-center cursor-pointer" value="Delete"/>
    </div>
  );
}

export default BookShelf;
