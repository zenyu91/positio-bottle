# positio-bottle
const BottlesGame: React.FC = () => {
/* ... */
<Shelves>
	<BottlePreview />
  
	{store.positionKeys.map((shelfKey, shelfIndex) => // пробегаемся по позициям
    store.getShelf(shelfKey).map((bottleKey, bottleIndex) => { // находим бутылки на полках
      if (bottleKey === null) {
        return null;
      }
      return (
      	<BottleDrag
        	bottle={bottles[bottleKey]}
        	position={[shelfIndex, bottleIndex]}
          key={`bottle-${shelfKey}-${bottleKey}`}
				/>
  		);
     })
  )}
  
  {Object.keys(bottles).map((columnIndex) => ( // рендерим по ячейке для бутылки на каждой полке
  	<div key={`bottlePlaceholder-${columnIndex}`}>
  		<BottleDrop position={[ShelvesEnum.top, Number(columnIndex)]} />
  		<BottleDrop
  			position={[ShelvesEnum.bottom, Number(columnIndex)]}
  		/>
  	</div>
  ))}
</Shelves>
/* ... */
};
