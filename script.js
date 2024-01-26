function cookvstakeout() {
    const cookTime = parseInt(document.getElementById('cooking-time').value);
    const cookCost = parseInt(document.getElementById('cooking-cost').value);
    const takeTime = parseInt(document.getElementById('takeout-time').value);
    const takeCost = parseInt(document.getElementById('takeout-cost').value);
    let wages = parseInt(document.getElementById('wage').value);
    const working = document.getElementById('work').value === 'yes';
    const res = document.getElementById('results');

    // Assuming the wage is in minutes, converting it to cost per minute
    wages = wages / 60;

    const cookTotal = wages * cookTime + cookCost;
    const takeTotal = wages * takeTime + takeCost;

    if (takeTotal < cookTotal && working) {
        res.innerText = 'Order Takeout, it\'s cheaper and you are working';
    } else if (takeTotal > cookTotal && working) {
        res.innerText = 'Go cook, it\'s cheaper and you are working';
    } else if (takeTotal < cookTotal && !working) {
        res.innerText = 'Order Takeout, it\'s cheaper';
    } else if (takeTotal > cookTotal && !working) {
        res.innerText = 'Go cook, it\'s cheaper';
    } else if (takeTotal === cookTotal) {
        res.innerText = 'Costs are equal, choose based on your preference';
    } else {
        res.innerText = 'An error occurred. Please check your inputs.';
    }
}