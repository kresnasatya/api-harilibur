export async function onRequest(context) {
    try {
        const url = new URL(context.request.url);

        // Get query parameters using URLSearchParams
        const month = url.searchParams.get('month') || '';
        const year = url.searchParams.get('year') || (new Date()).getFullYear();
        const responseText = await fetch(`https://raw.githubusercontent.com/kresnasatya/api-harilibur/refs/heads/main/data/${year}.json`);
        
        if (responseText.ok) {
            const rawData = await responseText.text();
            let data = JSON.parse(rawData);
            if (month) {
                data = data.filter(item => {
                    if ((new Date(item.holiday_date)).getMonth() + 1 == month) {
                        return item;
                    }
                });
            }
         
            let response = new Response(data);
            response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
            response.headers.set('Content-Type', 'application/json');
            response.headers.set('Access-Control-Allow-Origin', '*');
            response.headers.set('Access-Control-Allow-Methods', 'GET');

            return response;
        } else {
            let response = new Response(JSON.stringify({ error: responseText.statusText }), {
                status: responseText.status
            });
            response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
            response.headers.set('Content-Type', 'application/json');
            response.headers.set('Access-Control-Allow-Origin', '*');
            response.headers.set('Access-Control-Allow-Methods', 'GET');

            return response;
        }
    } catch (error) {
        let response = new Response(JSON.stringify({ error: error.message }), {
            status: error.statusCode || 500
        });

        response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400');
        response.headers.set('Content-Type', 'application/json');
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET');

        return response;
    }
}