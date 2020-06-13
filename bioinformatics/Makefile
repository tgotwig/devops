install:
	conda install -c bioconda blast

prepare:
	wget -P data/uniref50 'ftp://ftp.uniprot.org/pub/databases/uniprot/uniref/uniref50/uniref50.fasta.gz'
	gunzip data/uniref50/uniref50.fasta.gz
	makeblastdb -in data/uniref50/uniref50.fasta -dbtype prot
	echo 'MEEITQIKKRLSQTVRLEGKEDLLSKKDSITNLKTEEHVS' > query.prot.txt

blastp:
	blastp -query query.prot.txt -db data/uniref50/uniref50.fasta
