for(i in 1:length(df$Ladder)) {
  for(j in 1:length(df2$Region)) {
    if(grepl(CountryNamesFromdf2[j],CountryNamesFromdf[i])) {
      v <- c(df[i,],df2[j,])
    }
  }
}

for(i in 2:length(df3combined$Row.names)-1) {
  m <- i+1
  if(grepl(df3combined$Row.names[i],df3combined$Row.names[m])) {
    x <- df3combined[i,]
    for(j in 2:length(df3combined)) {
      if(!is.na(df3combined[m,j])) {
        x[j] <- df3combined[m,j]
      }
    }
    
  }
  df3total <- rbind(df3total,x)
}

for(i in 2:length(df3total$Row.names)-1) {
  m <- i+1
  if(df3total$Ladder[i] == df3total$Ladder[m]) {
    df3total <- df3total[-c(i),]
  }
}

for(i in 1:length(df3total$country)) {
  for(j in 1:length(df3total)) {
    ifelse(is.na(df3total[i,j]), df3total[i,j] <- 0, df3total[i,j] <- df3total[i,j])
  }
}
for(i in 1:length(df3total$birthrate)) {
  ifelse(is.na(df3total$deathrate[i]),df3total$deathrate[i] <- '8,27',df3total$deathrate[i] <- df3total$deathrate[i]);
}





