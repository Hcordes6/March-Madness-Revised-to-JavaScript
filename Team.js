class Team {

    constructor(teamValues) {
        this.index = teamValues[0];
        this.ranking = teamValues[1];
        this.name = teamValues[2];
        this.seed = teamValues[3];
        this.region = null;
        this.conf = teamValues[4];
        this.record = teamValues[5];
        this.adjEM = teamValues[6];
        this.adjO = teamValues[7];
        this.adjORank = teamValues[8];
        this.adjD = teamValues[9];
        this.adjDRank = teamValues[10];
        this.adjT = teamValues[11];
        this.adjTRank = teamValues[12];
        this.luck = teamValues[13];
        this.luckRank = teamValues[14];
        this.sosAdjEM = teamValues[15];
        this.sosAdjEMRank = teamValues[16];
        this.sosOppO = teamValues[17];
        this.sosOppORank = teamValues[18];
        this.sosOppD = teamValues[19];
        this.sosOppDRank = teamValues[20];
        this.ncsosAdjEM = teamValues[21];
        this.ncsosAdjEMRank = teamValues[22];
    }
    toString() {
        return `${this.index} ${this.ranking} ${this.name} ${this.seed} ${this.region} ${this.conf} ${this.record} ${this.adjEM} ${this.adjO} ${this.adjORank} ${this.adjD} ${this.adjDRank} ${this.adjT} ${this.adjTRank} ${this.luck} ${this.luckRank} ${this.sosAdjEM} ${this.sosAdjEMRank} ${this.sosOppO} ${this.sosOppORank} ${this.sosOppD} ${this.sosOppDRank} ${this.ncsosAdjEM} ${this.ncsosAdjEMRank}`;
    }
    getIndex() {
        return this.index;
    }
    getRanking() {
        return this.ranking;
    }
    getName() {
        return this.name;
    }
    getSeed() {
        return this.seed;
    }
    getRegion() {
        return this.region;
    }
    getConf() {
        return this.conf;
    }
    getRecord() {
        return this.record;
    }
    getAdjEM() {
        return this.adjEM;
    }
    getAdjO() {
        return this.adjO;
    }
    getAdjORank() {
        return this.adjORank;
    }
    getAdjD() {
        return this.adjD;
    }
    getAdjDRank() {
        return this.adjDRank;
    }
    getAdjT() {
        return this.adjT;
    }
    getAdjTRank() {
        return this.adjTRank;
    }
    getLuck() {
        return this.luck;
    }
    getLuckRank() {
        return this.luckRank;
    }
    getSosAdjEM() {
        return this.sosAdjEM;
    }
    getSosAdjEMRank() {
        return this.sosAdjEMRank;
    }
    getSosOppO() {
        return this.sosOppO;
    }
    getSosOppORank() {
        return this.sosOppORank;
    }
    getSosOppD() {
        return this.sosOppD;
    }
    getSosOppDRank() {
        return this.sosOppDRank;
    }
    getNcsosAdjEM() {
        return this.ncsosAdjEM;
    }
    getNcsosAdjEMRank() {
        return this.ncsosAdjEMRank;
    }
}