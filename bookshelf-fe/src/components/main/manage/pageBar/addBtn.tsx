function AddBtn() {
  return (
    <div className="w-[70px] h-[29px] bg-white border-custom-grey-light border-[1px] flex flex-row rounded-[7px] place-items-center justify-center gap-1">
      <div className="text-[16px] font-semibold text-custom-grey-light leading-[19px]">Add</div>
      <img className="w-[18px] h-[18px] fill-custom-grey-light" src="src/assets/icon _plus_.svg" alt="empty" />
    </div>
  )
}

export default AddBtn;
