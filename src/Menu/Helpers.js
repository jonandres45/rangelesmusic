export function handleClick (event, name){
    const anchor = (event.target.ownerDocument || document).querySelector(
        name,
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
}