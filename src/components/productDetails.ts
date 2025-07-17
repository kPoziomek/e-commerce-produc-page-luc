export function productDetails() {
  return {
    fitSize: [
      {size:'6', available:true},
      {size:'6.5', available:true},
      {size:'7', available:true},
      {size:'7.5', available:true},
      {size:'8', available:true},
      {size:'8.5', available:true},
      {size:'9', available:true},
      {size:'9.5', available:true},
      {size:'10', available:true},
      {size:'10.5', available:false},
      {size:'11', available:true}
    ],
    sizeModalOpen: false,
    selectedSize: '6.5',

    selectSize(size:string) {
      this.selectedSize = size;
    },
    widthSize:[
      {size:'B',available:true},
      {size:'C',available:false}
    ],
    calfWidth:[
      {size:'REFGULAR', available:true},
      {size:'EXTENDED', available:false},
    ],
  }
}
