export function score(rank, percent, minPercent) {
    if (rank > 150) return 0;
    if (rank > 75 && percent < 100) return 0;

    let points = (-24.9975 * Math.pow(rank - 1, 0.4) + 100) *
        ((percent - (minPercent - 1)) / (100 - (minPercent - 1)));

    points = Math.max(0, points);

    if (percent != 100) {
        return round(points - points / 3);
    }

    return Math.max(round(points), 0);
}

export function round(num) {
    return Math.round(num * 1000) / 1000;
}
