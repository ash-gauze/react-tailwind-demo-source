import type {NextConfig} from 'next';


const nextConfig:NextConfig = { 

  typescript:{
    ignoreBuildErrors:false,
    tsconfigPath:'./tsconfig.json',
  }, 
/*
  experimental:{
    turbo:{
    resolveExtensions:[
        '.tsx','.jsx','.ts','js'
      ]
    }
  }
*/
  
  webpack:function(config,{buildId,dev,isServer,defaultLoaders,webpack})  {
    config.stats={
     preset: 'verbose'};
    config.watchOptions = {
      poll:1000,
      aggregateTimeout:600,
    }
    return(config);
    } 

}





export default nextConfig;
