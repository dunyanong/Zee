const MultiColorProgressBar = (readings) => {
    return (
        <div className="bar" style={{'backgroundColor': item.color, 'width': item.value + '%'}}  key={i}></div>
    )
}