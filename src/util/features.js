export default function APIfeatures(query, queryString) {
    this.query = query;
    this.queryString = queryString;

    // Landing page 
    this.paginating = function() { 
        const page = this.queryString.page*1 || 1;
        const limit = this.queryString.limit*1 || 5;

        console.log(page, limit);
        return this;
    }
}