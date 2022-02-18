
const app = Vue.createApp({
    data() {
        return {
            rawOptions: editOptions,
            selectedOption: null,
            searchText: '',
            preparedOptions: []
        }
    },
    watch: {
        searchText() {
            this.preparedOptions = this.getPreparedFundsList();
            this.$refs.select.refresh(0);
        }
    },
    mounted() {
        this.preparedOptions = this.getPreparedFundsList();
        this.$refs.select.refresh(0);
    },
    methods: {
        click() {
            console.log(this.options);
        },
        getPreparedFundsList() {
            const getVisibleField = fund => fund.statusName || fund.fundName;

            const filteredFunds = !this.searchText ? [...this.rawOptions]
                : this.rawOptions
                    .filter( fund => String(getVisibleField(fund)).toLowerCase().includes(this.searchText.toLowerCase()))

            const getFundFolder = fund => fund.gender === 'MALE' ? 'MALE' : 'FEMALE'
            const fundFolderLabel = { MALE: 'Male names', FEMALE: 'Female names' };
            const getParentFund = folderName => ({ label: fundFolderLabel[folderName], isParent: true });
            const prepareFund = fund => ({label: getVisibleField(fund), value: fund.fundId});


            const fundsByCategory = filteredFunds.reduce( (fundsObject, fund) => {
                const fundFolderName = getFundFolder(fund);
                const fundFolder = fundsObject[fundFolderName];
                const preparedFund = prepareFund(fund);
                return {
                    ...fundsObject,
                    [fundFolderName]: !fundFolder ? [preparedFund] : [...fundFolder,preparedFund]
                }
            },{});

            const prepareFolder = folderName => {
                if(!fundsByCategory[folderName]) return [];
                return [ getParentFund(folderName), ...fundsByCategory[folderName] ];
            }

            const emptyItem = {label: '', value: null, isEmpty: true};

            const result = [
                ...prepareFolder('MALE'),
                ...prepareFolder('FEMALE'),
                emptyItem
            ];

            console.log(result);

            return result;
        }
    }
})

app.use(Quasar)
app.mount('#q-app')