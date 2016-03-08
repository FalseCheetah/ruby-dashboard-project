require_relative 'config/environment'

class App < Sinatra::Base

get '/' do
  erb :index
end

post '/' do
    @user = {
      name: "#{params["fname"]}",  
      profilepic: "#{params["propic"]}",
    }

erb :dashboard
 end
 
end 